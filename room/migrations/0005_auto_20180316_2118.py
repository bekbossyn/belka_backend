# Generated by Django 2.0 on 2018-03-16 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room', '0004_auto_20180316_1908'),
    ]

    operations = [
        migrations.AddField(
            model_name='deck',
            name='total_team01',
            field=models.PositiveSmallIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='deck',
            name='total_team02',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]