# Generated by Django 5.1 on 2024-08-15 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('T01Menu', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menuitem',
            name='description',
            field=models.TextField(max_length=200),
        ),
    ]
