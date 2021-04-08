import json
import re
import copy

in_file = "./uk.m3u"
out_file = "./uk-m3u-streams.json"

channel_list = []

with open(in_file, "r") as file:
    lines = file.readlines()

    # Remove file meta line (#EXTM3U)
    del lines[0]

    blank_channel = {
        "name": "Unknown",
        "logo": None,
        "streamUrl": None,
        "userAgent": None,
        "languages": [],
        "streamsTo": [],
    }

    channel = copy.deepcopy(blank_channel)

    for line in lines:
        # Remove trailing '\n'
        line = line.strip()

        if line.startswith("#EXTINF"):
            # Channel info line

            # Set name
            names = re.findall(r"tvg-name=\".+?[^\\]\"", line)

            if len(names) > 0:
                name = names[0]
                # Remove `tvg-name` and quotes from name
                channel["name"] = name[len('tvg-name="') : -1]

            # Set logo
            logos = re.findall(r"tvg-logo=\".+?[^\\]\"", line)

            if len(names) > 0:
                logo = logos[0]
                # Remove `tvg-name` and quotes from name
                channel["logo"] = logo[len('tvg-logo="') : -1]

            # Set languages
            languages = re.findall(r"tvg-language=\".+?[^\\]\"", line)

            if len(languages) > 0:
                lang = languages[0]
                # Remove `tvg-language` and quotes from name
                langSemiDelimited = lang[len('tvg-language="') : -1]

                channel["languages"] = langSemiDelimited.split(";")

            # Set countries
            countries = re.findall(r"tvg-country=\".+?[^\\]\"", line)

            if len(languages) > 0:
                country = countries[0]
                # Remove `tvg-language` and quotes from name
                countrySemiDelimited = country[len('tvg-country="') : -1]

                channel["streamsTo"] = countrySemiDelimited.split(";")

        if line.startswith("#EXTVLCOPT"):
            # Extra VLC options

            # Set user agent
            userAgents = re.findall(r"http-user-agent=.+", line)

            if len(names) > 0:
                userAgent = userAgents[0]
                
                channel["userAgent"] = userAgent[len('http-user-agent=') : ]


        if line.startswith("http"):
            # Stream URL line -- this is the final line before a new channel
            channel["streamUrl"] = line

            # Save channel to list
            channel_list.append(copy.deepcopy(channel))
            # Reset values
            channel = copy.deepcopy(blank_channel)

with open(out_file, "w") as file:
    # Dump channel list to JSON file
    json.dump(channel_list, file, indent=2)
