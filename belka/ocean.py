from .settings import *

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'belka_database',
        'USER': 'belka_user',
        'PASSWORD': 'belka_pass',
        'HOST': 'localhost',
        'PORT': '',
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = '/home/dev/static/'
MEDIA_ROOT = '/home/dev/media/'

SITE_URL = 'http://128.199.61.232'