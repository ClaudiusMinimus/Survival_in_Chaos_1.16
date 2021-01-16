#!/bin/sh
cp ~/backupfiles/ftbbackups-common.toml  ~/sic/config
while true; do
java -Xms8G -Xmx10G -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=35 -XX:G1MaxNewSizePercent=50 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled -Dusing.aikars.flags=mcflags.emc.gs -Dfml.queryResult=confirm -jar forge*.jar nogui
done
