<h1>re-direct</h1>

<h4>What is it?</h4>
Efficiently removes tracking redirects from Google's search results, both
regular ones and in image search. A mutation handler is installed so that
dynamically generated links are washed as well. The script looks at every
link once, and no other elements, so it is very fast.

<h4>Chrome plugin</h4>
A chrome plugin is available for free in <a href="https://chrome.google.com/webstore/detail/re-direct/aeecoplkhlfpclbiabnfkjlfkbhpbcjd">the Chrome Webstore</a>

<h4>Building the minimized version</h4>
To build the minimized version that is distributed in the plugin, use
<a href="https://developers.google.com/closure/compiler/">Google's closure compiler</a>

    $ java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js re-direct.js

<h4>License</h4>

Copyright (c) 2014 Marcus Svensson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
