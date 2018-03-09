define({ "api": [
  {
    "description": "<p>Изменение пароля</p>",
    "type": "post",
    "url": "/auth/change_password/",
    "title": "07. Поменять пароль [change_password]",
    "name": "Change_password",
    "group": "01__Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_password",
            "description": "<p>Current password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/change_password/"
      }
    ]
  },
  {
    "description": "<p>Изменение номера телефона <br>Завершение Изменения почты происходит в методе change_email_complete</p>",
    "type": "post",
    "url": "/auth/change_email/",
    "title": "10. Поменять почту [change_email]",
    "group": "01__Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_email",
            "description": "<p>New email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthChange_email",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/change_email/"
      }
    ]
  },
  {
    "description": "<p>Завершение смены email. Полсе подтверждения высланного кода, процесс считается завершенным.</p>",
    "type": "post",
    "url": "/auth/change_email_complete/",
    "title": "11. Завершение смены email [change_email_complete]",
    "group": "01__Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Auth Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_email",
            "description": "<p>New email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthChange_email_complete",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/change_email_complete/"
      }
    ]
  },
  {
    "description": "<p>Изменение номера телефона <br>Завершение Изменения номера происходит в методе change_phone_complete</p>",
    "type": "post",
    "url": "/auth/change_phone/",
    "title": "08. Поменять номер телефона [change_phone]",
    "group": "01__Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Токен авторизации</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_phone",
            "description": "<p>New Phone</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthChange_phone",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/change_phone/"
      }
    ]
  },
  {
    "description": "<p>Завершение смены номера. Полсе подтверждения высланного кода, процесс считается завершенным.</p>",
    "type": "post",
    "url": "/auth/change_phone_complete/",
    "title": "09. Завершение смены номера [change_phone_complete]",
    "group": "01__Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth-token",
            "description": "<p>Auth Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_phone",
            "description": "<p>New phone or email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthChange_phone_complete",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/change_phone_complete/"
      }
    ]
  },
  {
    "description": "<p>Cброс пароля по почте <br>Завершение Сброса пароля происходит в методе reset_email_password_complete</p>",
    "type": "post",
    "url": "/auth/reset_email_password/",
    "title": "14. Cброс пароля по почте  [reset_email_password]",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthReset_email_password",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/reset_email_password/"
      }
    ]
  },
  {
    "description": "<p>Завершение cброса пароля по почте</p>",
    "type": "post",
    "url": "/auth/reset_email_password_complete/",
    "title": "15. Завершение cброса пароля по почте [reset_email_password_complete]",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthReset_email_password_complete",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/reset_email_password_complete/"
      }
    ]
  },
  {
    "description": "<p>Сброс пароля <br>Завершение Сброса пароля происходит в методе reset_password_complete</p>",
    "type": "post",
    "url": "/auth/reset_password/",
    "title": "12. Сброс пароля [reset_password]",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthReset_password",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/reset_password/"
      }
    ]
  },
  {
    "description": "<p>Завершение сброса пароля. <br>Полсе подтверждения высланного кода, процесс считается завершенным.</p>",
    "type": "post",
    "url": "/auth/reset_password_complete/",
    "title": "13. Завершение сброса пароля [reset_password_complete]",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone or email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthReset_password_complete",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/reset_password_complete/"
      }
    ]
  },
  {
    "description": "<p>Регистрация с помощью социальной сети и (телефона или почты). Параметр rtype, для регистрации как риелтор.<br> 1. делаете запрос на <code>facebook_login/vk_login/google_login/insta_login</code> в зависимости от соцсети<br> 2. Если пользователь есть в системе, то придет <code>exists=true, user, token</code><br> Если пользователя нет в системе, то придет <code>exists=false, email, phone, full_name</code><br> Если phone или email есть, то подтверждение через код необязательно, т.к. доверяем соцсетям<br> Если мобилка, и <code>phone=null</code>, то необходимо заставить пользователя вбить номер телефона, и отправить <code>verify=phone</code><br> Если web, и <code>email=null</code>, то необходимо заставить пользователя вбить email, и отправить <code>verify=email</code><br> Если соцсеть выдала имейл либо телефон, то вы не сможете верифицировать другой имейл или телефон<br> 3. При успешной регистрации без верификации (соцсеть отдала телефон и имейл), вернется token и user (метод social sign_up)<br> 4. Если все таки верификация необходима, то нужно завершить регу через метод <code>sign_up_complete</code><br></p>",
    "type": "post",
    "url": "/auth/sign_up/social/",
    "title": "02. Регистрация через соцсети [social_signup]",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Social access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "facebook, google, insta, vk",
            "optional": false,
            "field": "social_type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>E-mail to verify</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Phone to verify</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-Владелец, 1-Частный Агент, 2-Агентство недвижимости, 3-Отель, 4-Хостел",
            "optional": true,
            "field": "rtype",
            "description": "<p>Realtor Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "commission",
            "description": "<p>For Agencies(2) and Individuals(1) [from 0 to 100 in PERCENT]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "person_id",
            "description": "<p>Person Id(ИИН)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "business_id",
            "description": "<p>Business Id(БИН)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "business_name",
            "description": "<p>Business Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contact_number",
            "description": "<p>Contact Number if No <code>Phone</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": true,
            "field": "certificate_id",
            "description": "<p>Certificate Ids generated. For all rtype except Owner<code>rtype=0</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "email, phone",
            "optional": true,
            "field": "verify",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "name": "PostAuthSign_upSocial",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/sign_up/social/"
      }
    ]
  },
  {
    "description": "<p>Регистрация с помощью телефона или почты. Параметр <code>rtype</code>, для регистрации как риелтор. <br>После регистрации, следует Завершение регистрации(<code>sign_up_complete</code>) с помощью высланного кода.<br> <br><code>rtype=0</code> Владелец, required params : person_id, person_name, [contact_number if NO phone] <br><code>rtype=1</code> Частный агент, required params : person_id, person_name, certificate, [contact_number if NO phone] <br><code>rtype=2</code> Агентство недвижимости, required params : person_name, business_id, business_name, certificates, [contact_number if NO phone] <br><code>rtype=3</code> Отель, required params : person_name, business_id, business_name, certificates, [contact_number if NO phone] <br><code>rtype=4</code> Хостел, required params : person_name, business_id, business_name, certificates, [contact_number if NO phone]</p>",
    "type": "post",
    "url": "/auth/sign_up/",
    "title": "01. Регистрация [sign_up]",
    "name": "SignUp",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>E-mail or Phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "kz, ru, ..",
            "optional": false,
            "field": "country",
            "description": "<p>Country [Можно посмотреть в методе countries ]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-Владелец, 1-Частный Агент, 2-Агентство недвижимости, 3-Отель, 4-Хостел",
            "optional": true,
            "field": "rtype",
            "description": "<p>Realtor Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "commission",
            "description": "<p>For Agencies(2) and Individuals(1) [from 0 to 100 in PERCENT]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "person_id",
            "description": "<p>Person Id(ИИН)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>E-mail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "business_id",
            "description": "<p>Business Id(БИН)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "business_name",
            "description": "<p>Business Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contact_number",
            "description": "<p>Contact Number [Required if user=<code>realtor</code> and registration is not by <code>phone</code>]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "certificate_id",
            "description": "<p>Certificate Ids (can be uploaded from method signup_upload_certificate)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/sign_up/"
      }
    ]
  },
  {
    "description": "<p>Завершение регистрации. Полсе подтверждения высланного кода, регистрация считается завершенной, и только после этого пользователь числится в базе.</p>",
    "type": "post",
    "url": "/auth/sign_up_complete/",
    "title": "03. Завершение регистрации [sign_up_complete]",
    "name": "SignUp_Complete",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Registration phone or email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code sent to phone or email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/sign_up_complete/"
      }
    ]
  },
  {
    "description": "<p>Авторизация через email или номер телефона</p>",
    "group": "01__Auth",
    "type": "post",
    "url": "/auth/signin/",
    "title": "05. Вход в систему [sign_in]",
    "name": "Sign_in",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>email or phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/signin/"
      }
    ]
  },
  {
    "description": "<p>Вход с помощью аккаунта Фэйсбук <br>С помощью <code>access_token</code> выполняется аутентификация пользователя</p>",
    "type": "post",
    "url": "/auth/facebook_login/",
    "title": "16. Вход с Фэйсбука [facebook_login]",
    "name": "facebook_login",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token of facebook user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json representation of user with token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/facebook_login/"
      }
    ]
  },
  {
    "description": "<p>Вход с помощью Гугл Аккаунта <br>С помощью <code>access_token</code> выполняется аутентификация пользователя</p>",
    "type": "post",
    "url": "/auth/google_login/",
    "title": "17. Вход с Гугл Аккаунта [google_login]",
    "name": "google_login",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token of Google user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json representation of user with token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/google_login/"
      }
    ]
  },
  {
    "description": "<p>Вход с помошью аккаунта Инстаграм <br>С помощью <code>access_token</code> выполняется аутентификация пользователя</p>",
    "type": "post",
    "url": "/auth/insta_login/",
    "title": "18. Вход с Инстаграма [insta_login]",
    "name": "insta_login",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token of Instagram user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json representation of user with token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/insta_login/"
      }
    ]
  },
  {
    "description": "<p>Вход с помощью Аккаунта VK <br>С помощью <code>access_token</code> выполняется аутентификация пользователя</p>",
    "type": "post",
    "url": "/auth/vk_login/",
    "title": "19. Вход с ВК [vk_login]",
    "name": "vk_login",
    "group": "01__Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token of vk user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": "<p>Json representation of user with generated token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./core/views.py",
    "groupTitle": "01__Auth",
    "sampleRequest": [
      {
        "url": "http://localhost/api/auth/vk_login/"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./static/apidoc/main.js",
    "group": "_home_asus_workspace_belka_static_apidoc_main_js",
    "groupTitle": "_home_asus_workspace_belka_static_apidoc_main_js",
    "name": ""
  }
] });