# express 설치
	npm install -g express

# Dockerfile build
	docker build -t nodejs_test .

# docker run
	docker run -itd -p 8080:8080 --name nodejs_test nodejs_test

# 접속 테스트
	http://localhost:8080/
