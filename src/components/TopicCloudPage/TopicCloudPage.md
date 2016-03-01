# TopicCloudPage Component


A page that display :
- a title
- a tag cloud made out of the topic labels found at $source
- a detail pane on the right side

Tag Cloud should respect the following rules:
- The label.property of each topic should be the 'word' in the word cloud
- Each topic should have one of 6 different text sizes, with the most popular topics largest, and least popular smallest
- A topic with a sentiment score > 60 should be displayed in green
- A topic with a sentiment score < 40 should be displayed in red
- Other topics should be displayed in grey
- When a topic is clicked, metadata about the topic should be displayed (total volume, and how that breaks down into positive, neutral and negative sentiment)

## Props

string source: http url where topics can be found in JSON format

