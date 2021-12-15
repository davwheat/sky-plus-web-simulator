import json
import re
import copy

in_file = "./uk.m3u"
out_file = "./uk-m3u-streams.json"

channel_list = []

with open(in_file, mode="r", encoding="utf-8") as file:
    lines = file.readlines()

    # Remove file meta line (#EXTM3U)
    del lines[0]

    blank_channel = {
        "name": "Unknown",
        "streamUrl": None,
    }

    channel = copy.deepcopy(blank_channel)

    for line in lines:
        # Remove trailing '\n'
        line = line.strip()

        if line.startswith("#EXTINF"):
            # Channel info line

            # Set name
            names = re.findall(r'#EXTINF:-1,(.*)', line)
            if len(names) > 0:
                channel["name"] = names[0]

            # # Set logo
            # logos = re.findall(r'tvg-logo="(.*?)"', line)
            # if len(names) > 0:
            #     channel["logo"] = logos[0]

            # # Set languages
            # languages = re.findall(r'tvg-language="(.*?)"', line)
            # if len(languages) > 0:
            #     channel["languages"] = languages[0].split(";")

            # # Set countries
            # countries = re.findall(r'tvg-country="(.*?)"', line)
            # if len(languages) > 0:
            #     channel["streamsTo"] = countries[0].split(";")

        if line.startswith("#EXTVLCOPT"):
            # Extra VLC options

            # Set user agent
            userAgents = re.findall(r"http-user-agent=(.+)", line)
            if len(names) > 0:
                channel["userAgent"] = userAgents[0]


        if line.startswith("http"):
            # Stream URL line -- this is the final line before a new channel
            channel["streamUrl"] = line

            # Save channel to list
            channel_list.append(copy.deepcopy(channel))
            # Reset values
            channel = copy.deepcopy(blank_channel)

with open(out_file, mode="w", encoding="utf-8") as file:
    # Dump channel list to JSON file
    json.dump(channel_list, file, indent=2)
