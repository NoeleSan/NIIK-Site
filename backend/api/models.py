from django.db import models
from accounts.models import UserAccount
# Create your models here.
class Employee(models.Model):
    em_fio =models.TextField()
    em_phone=models.TextField()

class Project(models.Model):
    pr_name = models.CharField(max_length=100,null=True)
    pr_start = models.DateField(null=True)
    pr_end = models.DateField(null=True)
    pr_stage = models.CharField(max_length=150,null=True)
    pr_price = models.PositiveIntegerField(default=1000)
    pr_discription = models.TextField(null=True)
    pr_type =models.PositiveIntegerField(default=1)
    pr_emloyee =models.PositiveIntegerField(null=True)
    pr_buyer=models.PositiveIntegerField(null=True)

class ProjectCards(models.Model):
    name = models.CharField(max_length=50, blank=True)
    discription = models.CharField(max_length=255, blank=True)
    url = models.CharField(max_length=1000, default='https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-805-340x340.png',blank=True)
    type = models.PositiveIntegerField(default=1)

class Call(models.Model):
    number = models.CharField( max_length=30,blank=True)
    name = models.CharField(max_length=255, blank=True)
    state = models.BooleanField(default=False)
    project = models.CharField(max_length = 50, blank=True)