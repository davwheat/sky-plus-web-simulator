import json

servicesJson = ""

allChannels = {}

with open("services.json", mode="r", encoding="utf-8") as file:
    servicesJson = file.read()

services = json.loads(servicesJson)["services"]

for service in services:
    if service["c"] in allChannels:
        print(f"Channel {service['c']} is already defined!")
        exit()

    allChannels[service["c"]] = {
        "channelNumber": service["c"],
        "name": service["t"],
        "sid": service["sk"],
        "quality": service["sf"],
    }

with open("channelList.json", mode="w", encoding="utf-8") as file:
    json.dump(allChannels, file, indent=2)
