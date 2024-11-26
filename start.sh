#!bin/bash
RED='\033[0;31m'
while : 
do
printf "${RED}︎Miwa Bot V4 - A script contém auto reconexão ativada para prevenção de quedas...\n"
node Miwa-Connect.js --code
sleep 1
printf "${RED}\nPrograma fechado! Iniciando bot novamente...\n"
done