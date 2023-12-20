# 변수선언
#  javascript 에서 세미콜론;으로 한 줄의 끝을 알린다면, python은 줄바꿈을 통해서 알림
a = 2
b = 3
c = 5
맥북 = '비싸'
print(맥북)

# 조건문
a=1
if a==1:
    print(2)
else:
    print(5)
    
# 배열
배열=[1,2,3,4,5]
print(배열[0])

# 객체 => class 사용
# def : 정의
class A_가수:
    def 장르():
        print('jazz')
    def 이름():
        print("abc")
        
A_가수.이름()

# 함수 => def
def sayHello():
    print("안녕하세요")
    
sayHello()

# boolean: True False 앞이 대문자, 연산자는 && 하나만 붙여도 됨
if True & True:
    print("참")
    
# for
# 1부터 5가되기 전까지
for i in range(1,5):
   
    print(i)