# Generated by Django 2.1 on 2018-08-31 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0007_remove_room_previous_eggs'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='previous_eggs',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]
