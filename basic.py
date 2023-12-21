# 파이썬은 간결하고 개발 속도가 빠르다
# 파이썬으로 할 수 있는 일 : 시스템 유틸리티 제작, GUI프로그래밍, C/C++과의 결합, 웹프로그래밍, 수치 연산 프로그래밍, 데이터베이스 프로그래밍, 테이터 분석, 사물 인터넷 
# 파이썬으로 할 수 없는 일: 시스템과 밀접한 프로그래밍 영역, 모바일 프로그래밍

# 자료형 => 자료에 대한 타입(숫자/문자열)
# => 어떤 값을 담는 자료구조 (불/변수/리스트/튜플/딕셔너리/집합)

# 변수=어떤 값을 담는 상자
# 숫자형= ⭐️정수형(int) ⭐️실수(소수점,float) 지수(e) 8진수 16진수
# 사칙연산 가능 
#  / 나누기, //몫, % 나머지, **제곱 => a**b a의 b승
a=3
b=4
print(a+b)
print(a*b)
print(a/b)
print(a//b)
print(a%b)
print(a**b) 

# 문자열str " ",' ',""" """,''' '''
# 문자열에 따옴표를 포함시키기 \' 사용
# 줄바꿈 \n
# 문자열에\ 넣고싶으면 \\
    
    
# 문자열 자료형
# 인덱싱indexing = 긴 문자열에서 각각의 숫자가 부여(0부터, 음수가능)
# ⭐️슬라이싱slicing = 문자를 자른다 a[이상(빈칸가능, 빈칸:처음부터):미만(인덱스값, 빈칸가능, 빈칸=끝까지):간격] 
# 포매팅 %d(정수) %s(숫자)
# 정렬, 공백 %10s     s'hi' =>          hi (앞에 10칸 띄움,음수 가능 음수는 오른쪽으로 공백)
# %(간격,소수점 자리)f => a= %(0,4)f a:0.12345 ==> 0.1234
# 문자열 개수 세기 =count
# 위치 알려주기 =find 

# 함수 count
# ⬇️ a에서 b의 개수
# 함수 find => 가장 먼저 나오는 b의 인덱스값, 없으면 -1이 나옴(인덱스 값이 0부터 시작되기때문에 0이 아님), 있으면 인덱스값이 나옴
a='hobby'
a.count('b')
print(a.count('b'))
print(a.find('b'))
# .join = 쪼갬, 문자열 삽입
a="ㅎ".join("abcd")
print(a)
# 소문자 대문자 바꾸기 => a.upper() a.lower()
# 공백 없애주기 => a.strip()
# 문자열 바꾸기 => replace(a,b) => a를 b로 교체한다
c= 'im hungry'
print(c.replace('im','you\'re'))
# 문자열 나누기 => split (빈칸일 경우)띄어쓰기를 기준으로 잘라서 리스트로 만든다.
print(c.split())
# split 빈칸이 아닌 경우=> 특정 문자열 기준으로 자를 수 있음
d="A:B:C:D"
print(d.split(':'))

# 리스트 => 변수 여러 개를 묶는 역할 prit(e[index값]), 빈칸 가능 숫자 가능 숫자+문자 가능, 리스트 안에 리스트 가능
e = ['가나다','라마바','사아자','차카타','파하',['배','고','파'],1,3]
print(e[1])
print(e[5][1])
print(e[6]+e[7])
print(e[0:3])
# 리스트 자료형
# 추가 append 
# 정렬 sort(크기순, 알바펫순)
# 뒤집기 reverse
# 위치 반환 index
# 제거 remove
# 마지막 요소를 뺌 pop
# 개수 세기 count()
# 리스트 확장(추가) extend


# 튜플 ( , , ) 고정된 것❗️ / 리스트처럼 값을 추가하거나 삭제, 바꿀 수 없음
# 슬라이싱, 덧셈, 등 변하는 값을 볼 수는 있지만 변하지 않음
# t1 =(1,2,'a','b')
# del t1[0]
# ↪️결과 TypeError: 'tuple' object doesn't support item deletion

# ⭐️딕셔너리(연관배열, 해시hash, key를 통해 value를 얻는다)

dic ={ 'name':'heeju','age':27}
print(dic['name'])

# 딕셔너리 쌍 추가하기 f[key]=value
f = {1:'f'}
f['name']='heeju'
print(f)
# 삭제하기 delete(key)
del f[1]
print(f)

# key가 같으면 안됨(value는 같아도 됨)=> 같으면 마지막 key와 value만 남음
g = {1:2,1:3}
print(g)
# {1: 3}

# key list 만들기
h = {1:'han',2:'hee',3:'ju'}
print(h.keys())

print(h.values())

print(h.items())
# 튜플형태로 나옴(1, 'han'), (2, 'hee'), (3, 'ju')

for k in h.keys():
    print(k)
    
for v in h.values():
    print(v)    
    
for i in h.items():
    print(i)
    
for k, v in h.items():
      print("key는"+str(k))
      print("value는"+v) 
      
#비우기   
# h.clear()
# print(h)

# .get => 값이 없으면 none
print(h.get(4,'없음'))
# in => true false
print(1 in h)


