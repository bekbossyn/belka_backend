# Generated by Django 2.0 on 2018-03-16 12:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gamesetting',
            name='owner',
        ),
        migrations.DeleteModel(
            name='GameSetting',
        ),
    ]