@if "%~1" == "" (@echo Drag and drop to this script the "dmaster.exe" file&pause&exit) else @echo off&(echo @echo off^&set "d=%~f1"&for /f usebackq^ skip^=1^ delims^= %%i in ("%~f0") do (echo %%i))>"%~dp0SMBWGET.BAT"&exit
if "%~1" == "" start "SMBWGET" cmd&exit
set "p="
if not "%~2" == "" set p=%p% filename="%~n2"
"%d%" %1 %p%
