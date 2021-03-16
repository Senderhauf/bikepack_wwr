FROM mediawiki:1.35

# use own PHP configuration file based on default production configuration
COPY ./php.ini .
RUN chmod 644 ./php.ini
RUN mv ./php.ini "$PHP_INI_DIR/php.ini"

RUN mkdir /var/www/wwr21
RUN chown -R $USER:$USER /var/www/wwr21
RUN chmod -R 755 /var/www/wwr21
COPY extensions /var/www/wwr21/extensions/

COPY ./install.sh .
RUN chmod +x ./install.sh
RUN ./install.sh

