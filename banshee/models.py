from django.db import models
import datetime
# Create your models here.

class Alert(models.Model):
    LEVELS = (
        (0, "低"),
        (1, "中"),
        (2, "高"),
    )

    level = models.SmallIntegerField(choices=LEVELS)
    app_id = models.CharField(max_length=30)
    tigger_time = models.DateTimeField(default=datetime.datetime.now())
    msg = models.CharField(max_length=300)