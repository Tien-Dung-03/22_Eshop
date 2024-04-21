# Generated by Django 5.0.4 on 2024-04-04 00:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='static/images/')),
                ('description', models.TextField()),
                ('price', models.FloatField()),
                ('status', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='VehicleDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=255)),
                ('engineer_size', models.FloatField(default=0)),
                ('cylinder', models.IntegerField(default=4)),
                ('length', models.FloatField(default=0)),
                ('width', models.FloatField(default=0)),
                ('weight', models.FloatField(default=0)),
                ('height', models.FloatField(default=0)),
                ('max_speed', models.FloatField(default=60)),
                ('doors', models.IntegerField(default=4)),
                ('seats', models.IntegerField(default=4)),
                ('interior_color', models.CharField(max_length=255)),
                ('fuel', models.CharField(max_length=100)),
                ('gear_box', models.CharField(max_length=255)),
                ('vehicle_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='vehicle.vehicle')),
            ],
        ),
    ]
