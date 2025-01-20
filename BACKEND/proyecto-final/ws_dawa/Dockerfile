#docker build -t dawa_ws_image:latest .

FROM python_base:latest
RUN apt-get update && \
    apt-get -y install --no-install-recommends \
    tzdata
WORKDIR /app/dawa
COPY . /app/dawa
RUN pip3 --no-cache-dir install -r src/utils/requerimientos.txt
CMD ["python3", "app.py"]