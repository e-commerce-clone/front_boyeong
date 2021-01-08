from django.db import models

# Create your models here.
class User(models.Model):
    username=models.CharField(max_length=12)
    #password1,password2,name,email,phone,address,gender,birth
    password=models.CharField(max_length=20)
    name=models.CharField(max_length=10)
    email=models.CharField(max_length=50)
    phone=models.CharField(max_length=12)
    address=models.CharField(max_length=100)
    gender=models.CharField(max_length=5)
    birth=models.CharField(max_length=14)

    def __str__(self):
        return self.username
        
    class Meta:
        db_table = 'user_data'