from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, phone,password=None):    
        if not email:
            raise ValueError('The given email does not exist.')
        email=self.normalize_email(email)
        user =self.model(email=email, name=name,phone=phone)
        user.set_password(password)
        user.save(using=self._db)
        return user

class UserAccount(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=30, default=None)
    is_active= models.BooleanField(default=True)
    is_staff= models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['name','phone','is_staff']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name
    
    def __str__(self):
        return self.email

