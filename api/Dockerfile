FROM golang:1.16

RUN mkdir /go/src/app

WORKDIR /go/src/app
ADD . /go/src/app

RUN go mod tidy
RUN go install github.com/cosmtrek/air@v1.27.3

CMD ["air", "-c", ".air.toml"]
