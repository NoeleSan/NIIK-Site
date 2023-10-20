from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User=get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model=User
        fields =('id','email','phone','name','password','is_staff')

class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model=User
        fields =('id','email','phone','name','password','is_staff')