videos_prefix := "./output/videos/main/1080p30/"

makevid:
    # make sure we can use manim
    source .venv/bin/activate.fish
    # build all scenes
    manim main.py Intro MeatAndPotatoes Outro

runvid:
    # find video files using `find` command, sort them and pipe it into a file called `list.txt`
    find {{videos_prefix}} -maxdepth 1 -type f -name '*.mp4' | sort | xargs -I {} echo "file '{}'" > list.txt
    # combine videos
    ffmpeg -f concat -safe 0 -i list.txt -c copy output.mp4
    # run the combined video files
    vlc output.mp4
