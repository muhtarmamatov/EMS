FROM tomcat:8
COPY target/*.war /usr/local/tomcat/webapps/EMS.war
ENTRYPOINT [ "sh", "-c", "java  -jar /usr/local/tomcat/webapps/ELMS.war" ]
EXPOSE 8080
