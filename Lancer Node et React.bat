@echo off

REM Lancer le serveur Node.js
cd api
cd api
echo Démarrage du serveur Node.js...
start "Node Server" cmd /c "node app.js"
cd ..
cd ..

REM Lancer le serveur de développement React
cd React
cd DomainEase
echo Démarrage du serveur React...
start "React Server" cmd /c "npm run dev"
cd ..
cd ..

REM Attendre que les deux processus se terminent
echo Attente de la fermeture des serveurs...

:wait
REM Vérifie si les processus Node.js ou npm (React) sont toujours actifs
tasklist | find /i "node.exe" >nul
if %errorlevel%==0 goto wait
tasklist | find /i "npm.exe" >nul
if %errorlevel%==0 goto wait

REM Si les deux processus sont arrêtés, fermer la fenêtre principale CMD
echo Tous les processus sont terminés. Fermeture...
exit
