# Pride and Prejudice - Novel App

![Thumbnail of the dark theme](<./public/tb%20(2).png>)
This is an application focusing on **reading and learning**, aiming to make the reading of classics such as **Pride and Prejudice** a more comfortable experience, with:

-   Various customization options, colors, alignment, size and font-family.
-   Easy access to analysis such as LitCharts and SparkNotes.
-   Online and responsive reading, making it easy to read on-the-go.
-   highlighting difficult words (toggle is currently a WIP).

The idea is to make a similar experience to epub/ebook reading, but online and with some extra features. **Hope you like it, and feel free to give me any feedback!**

## Current Tech Stack

-   Next.JS 13
-   CMS - Contentful
-   Zustand
-   PostCSS

## Libraries

-   Prime-React (accessible tooltips and sidebar)
-   React-Icons

![Thumbnail of the style options](<./public/tb%20(3).png>)

# Future

There are some aspects I wish to improve, such as:

-   Adding auth, for chapter tracking and bookmarking
-   Finding an easy way to implement more chapters, and eventually, books.
    -   Currently the content is hosted through a CMS, and a previous version used Mongoose / MongoDB, though I faced difficulties in its integration with Next 13.
    -   I will probably need to find a way to better incorporate Project Gutenberg assets.
-   Adding a toggle for words, enabling suggestions for new words for improvement, and further on, disabling specific word highlight - like a personal dictionary.
