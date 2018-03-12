from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt

from utils import http, codes, messages
from utils.constants import LANGUAGES, ON_SAVE, ON_FULL, ON_EGGS
from utils.upload import resize_image

User = get_user_model()


@http.json_response()
@http.requires_token()
@http.required_parameters(["user_id"])
@csrf_exempt
def info(request, user):
    """
        @apiIgnore
        @apiDescription Иноформация о Пользователе.
        @api {get} /user/info/ 01. Client Info
        @apiGroup Client
        @apiHeader {String} auth-token Токен авторизации
        @apiSuccess {json} result Json
    """
    try:
        new_user = User.objects.get(pk=int(request.POST.get("user_id") or request.GET.get("user_id")))
    except ObjectDoesNotExist:
        return http.code_response(code=codes.BAD_REQUEST, message=messages.USER_NOT_FOUND)
    return {
        "user": new_user.json(user=user),
    }


@http.json_response()
@http.requires_token()
@csrf_exempt
def update_profile(request, user):
    """
        @apiIgnore
        @apiDescription Обновить профиль.
        @api {post} /client/update_profile/ 04. Update profile
        @apiGroup Client
        @apiHeader {String} auth-token Токен авторизации
        @apiParam {String} [name] Name
        @apiParam {String} [description] Description
        @apiParam {String} [job] Job
        @apiParam {String} [education] Education
        @apiParam {Date} [birthday] Birthday
        @apiParam {Number{0=NONE,1=MALE,2=FEMALE}} [gender] Gender
        @apiParam {String} [country] Country
        @apiParam {String} [contact_number] Contact Number
        @apiParam {String} [address] Address [Место проживания]

        @apiSuccess {json} result Json
    """
    try:
        name = request.POST.get("name") or request.GET.get("name")
        user.name = name
    except:
        pass
    try:
        language = int(request.POST.get("language") or request.GET.get("language"))
        if language not in [x[0] for x in LANGUAGES]:
            return http.code_response(code=codes.BAD_REQUEST, message=messages.INVALID_PARAMS, field="language")
        user.language = language
    except:
        pass
    #   user's GameSetting
    if user.rooms.filter(active=True).count() == 0:
        try:
            on_save = int(request.POST.get("on_save") or request.GET.get("on_save"))
            if on_save and on_save not in [x[0] for x in ON_SAVE]:
                return http.code_response(code=codes.BAD_REQUEST, message=messages.INVALID_PARAMS, field="on_save")
            user.game_setting.on_save = on_save
        except:
            pass
        try:
            on_full = int(request.POST.get("on_full") or request.GET.get("on_full"))
            if on_full and on_full not in [x[0] for x in ON_FULL]:
                return http.code_response(code=codes.BAD_REQUEST, message=messages.INVALID_PARAMS, field="on_full")
            user.game_setting.on_full = on_full
        except:
            pass
        try:
            ace_allowed = request.POST.get("ace_allowed") or request.GET.get("ace_allowed")
            if ace_allowed is not None and ace_allowed.lower() in ['true', 'false']:
                ace_allowed = ace_allowed.lower() == 'true'
                user.game_setting.ace_allowed = ace_allowed
        except:
            pass
        try:
            on_eggs = int(request.POST.get("on_eggs") or request.GET.get("on_eggs"))
            if on_eggs and on_eggs not in [x[0] for x in ON_EGGS]:
                return http.code_response(code=codes.BAD_REQUEST, message=messages.INVALID_PARAMS, field="on_eggs")
            user.game_setting.on_eggs = on_eggs
        except:
            pass
        user.game_setting.save()
    user.save()
    return {
        "user": user.json(user=user)
    }


@http.json_response()
@http.requires_token()
@http.required_parameters(["avatar"])
@csrf_exempt
def update_avatar(request, user):
    """
        @apiIgnore
        @apiDescription Загрузка аватара.
        @api {post} /client/upload_avatar/ 02. Upload avatar
        @apiGroup Client
        @apiHeader {String} auth-token Токен авторизации
        @apiParam {File} avatar Файл изображения
        @apiSuccess {json} result Json
    """
    user.avatar = request.FILES.get("avatar")
    user.avatar_big = request.FILES.get("avatar")
    user.save()
    resize_image(user.avatar, user.avatar_big)
    return {
        "user": user.json(user=user),
    }


@http.json_response()
@http.requires_token()
@csrf_exempt
def remove_avatar(request, user):
    """
        @apiIgnore
        @apiDescription Загрузка аватара.
        @api {post} /client/upload_avatar/ 02. Upload avatar
        @apiGroup Client
        @apiHeader {String} auth-token Токен авторизации
        @apiParam {File} avatar Файл изображения
        @apiSuccess {json} result Json
    """
    user.avatar = None
    user.avatar_big = None
    user.save()
    return {
        "user": user.json(user=user),
    }