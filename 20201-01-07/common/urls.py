from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name='common'
urlpatterns=[
    path('',views.index, name='index'),
    path('signup/', views.signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(
        template_name='common/login.html'), name='login'),
    path('find_id/', views.findid, name='findid'),
    path('find_pw/', views.findpw, name='findpw'),
    path('find_id_ok/', views.findidok, name='findidok'),
    path('find_pw_ok/', views.findpwok, name='findpwok'),
    path('find_pw_email/', views.findpwem, name='findpwem'),
    path('reset_pw/', views.resetpw, name='resetpw'),
]