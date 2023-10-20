from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from .models import Project,Employee,ProjectCards,Call
from .serializers import ProjectSerializer,EmployeeSerializer,CardSerializer,CallSerializer
from django.contrib.auth import get_user_model
User=get_user_model()
from accounts.serializers import UserSerializer
# Create your views here.

@csrf_exempt
def apiProject(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        seralizer = ProjectSerializer(projects, many=True)
        return JsonResponse(seralizer.data,safe=False)

    elif request.method == 'POST':
        project_data = JSONParser().parse(request)
        seralizer = ProjectSerializer(data=project_data)
        if seralizer.is_valid():
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

    elif request.method == 'PUT':
        project_data = JSONParser().parse(request)
        project = Project.objects.get(id=project_data['id'])
        seralizer =ProjectSerializer(project,data=project_data)
        if seralizer.is_valid():
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

    elif request.method == 'DELETE':
        project_data = JSONParser().parse(request)
        project = Project.objects.get(id=project_data['id'])
        project.delete()
        return JsonResponse("Success",safe=False)

@csrf_exempt
def apiEmployee(request):
    if request.method == 'GET':
        employees = Employee.objects.all()
        seralizer = EmployeeSerializer(employees, many=True)
        return JsonResponse(seralizer.data,safe=False)

    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        seralizer = EmployeeSerializer(data=employee_data)
        if seralizer.is_valid(): 
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(id=employee_data['id'])
        seralizer =EmployeeSerializer(employee,data=employee_data)
        if seralizer.is_valid():
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

    elif request.method == 'DELETE':
        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(id=employee_data['id'])
        employee.delete()
        return JsonResponse("Success",safe=False)

@csrf_exempt
def apiUser(request):
    if request.method == 'GET':
        users = User.objects.all()
        seralizer = UserSerializer(users, many=True)
        return JsonResponse(seralizer.data,safe=False)

    elif request.method == 'DELETE':
        user_data = JSONParser().parse(request)
        user = User.objects.get(id=user_data['id'])
        user.delete()
        return JsonResponse("Success",safe=False)

@csrf_exempt
def apiCard(request):
    if request.method == 'GET':
        cards = ProjectCards.objects.all()
        seralizer = CardSerializer(cards, many=True)
        return JsonResponse(seralizer.data,safe=False)

    elif request.method == 'DELETE':
        cards_data = JSONParser().parse(request)
        card = ProjectCards.objects.get(id=cards_data['id'])
        card.delete()
        return JsonResponse("Success",safe=False)

    elif request.method == 'POST':
        cards_data = JSONParser().parse(request)
        seralizer = CardSerializer(data=cards_data)
        if seralizer.is_valid():
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

    elif request.method == 'PUT':
        cards_data = JSONParser().parse(request)
        card = ProjectCards.objects.get(id=cards_data['id'])
        seralizer =CardSerializer(card,data=cards_data)
        if seralizer.is_valid():
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

@csrf_exempt
def apiCall(request):
    if request.method == 'GET':
        calls = Call.objects.all()
        seralizer = CallSerializer(calls, many=True)
        return JsonResponse(seralizer.data,safe=False)

    elif request.method == 'POST':
        call_data = JSONParser().parse(request)
        seralizer = CallSerializer(data=call_data)
        if seralizer.is_valid(): 
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

    elif request.method == 'PUT':
        call_data = JSONParser().parse(request)
        call = Call.objects.get(id=call_data['id'])
        seralizer =CallSerializer(call,data=call_data)
        if seralizer.is_valid():
            seralizer.save()
            return JsonResponse("Success",safe=False)
        return JsonResponse("Error",safe= False)

    elif request.method == 'DELETE':
        call_data = JSONParser().parse(request)
        call = Call.objects.get(id=call_data['id'])
        call.delete()
        return JsonResponse("Success",safe=False)