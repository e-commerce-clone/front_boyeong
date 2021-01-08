from django.shortcuts import render,redirect
from common.forms import UserForm
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from .models import User

# Create your views here.

def index(request):
    return render(request,'common/login_ok.html')

def signup(request):
    if request.method == "POST":
         if request.POST['password1'] == request.POST['password2']:
            user = User.objects.create(
                username = request.POST['username'], 
                password = request.POST['password1'],
                name=request.POST['name'],
                email=request.POST['email'],
                phone=request.POST['phone'],
                address=request.POST['address'],
                gender=request.POST['gender'],
                birth=request.POST['birth'])
            # auth.login(request, user)
            # 회원가입완료 후 자동 로그인 되도록 함.
            return redirect('index')
    
    return render(request, 'common/signup.html')

def findid(request):
    return render(request, 'common/find_id.html')   

def findpw(request):
    return render(request, 'common/find_pw.html')  


def findidok(request):
    return render(request, 'common/find_id_ok.html')

def findpwok(request):
    return render(request, 'common/find_pw_ok.html')

def findpwem(request):
    return render(request, 'common/find_pw_email.html')

def resetpw(request):
    return render(request, 'common/reset_pw.html')

        
