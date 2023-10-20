from rest_framework.serializers import ModelSerializer
from .models import Project,Employee,ProjectCards,Call

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields ='__all__'

class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = Employee
        fields ='__all__'
    
class CardSerializer(ModelSerializer):
    class Meta:
        model = ProjectCards
        fields ='__all__'

class CallSerializer(ModelSerializer):
    class Meta:
        model = Call
        fields ='__all__'