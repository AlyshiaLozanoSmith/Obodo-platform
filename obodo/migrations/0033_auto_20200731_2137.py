# Generated by Django 3.0.8 on 2020-07-31 21:37

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('obodo', '0032_auto_20200731_2125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_pic',
            field=imagekit.models.fields.ProcessedImageField(upload_to='images'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='picture',
            field=imagekit.models.fields.ProcessedImageField(upload_to='images'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='profile_pic',
            field=imagekit.models.fields.ProcessedImageField(upload_to='images'),
        ),
    ]
