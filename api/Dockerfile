FROM golang:1.15

RUN mkdir /go/src/app

WORKDIR /go/src/app
ADD . /go/src/app

RUN go mod tidy
