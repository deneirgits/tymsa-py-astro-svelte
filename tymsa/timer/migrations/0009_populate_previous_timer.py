# Generated by Django 5.0 on 2024-01-16 14:16

from django.db import migrations


def populate_previous_timer(apps, schema_editor):
    Timer = apps.get_model("timer", "Timer")

    for timer in Timer.objects.filter(previous__isnull=True):
        try:
            prev = Timer.objects.get(pk=timer.pk - 1)
            timer.previous = prev
            timer.save()
        except Timer.DoesNotExist:
            pass


def remove_previous_timer(apps, schema_editor):
    Timer = apps.get_model("timer", "Timer")

    for timer in Timer.objects.all():
        timer.previous = None
        timer.save()


class Migration(migrations.Migration):
    dependencies = [
        ("timer", "0008_timer_previous"),
    ]

    operations = [migrations.RunPython(populate_previous_timer, remove_previous_timer)]