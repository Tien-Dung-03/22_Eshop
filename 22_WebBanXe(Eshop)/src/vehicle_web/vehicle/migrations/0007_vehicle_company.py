# Generated by Django 5.0.4 on 2024-05-27 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehicle', '0006_rename_engineer_size_vehicledetail_capacity_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicle',
            name='company',
            field=models.CharField(default='', max_length=255),
        ),
    ]
