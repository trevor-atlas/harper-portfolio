all: clean build

clean:
	@rm -rf ./public ./resources

run:
	hugo serve -D

build:
	hugo --gc --minify

