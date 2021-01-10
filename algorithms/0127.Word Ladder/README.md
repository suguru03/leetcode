## 0127. Word Ladder

https://leetcode.com/problems/word-ladder

Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

    Only one letter can be changed at a time.
    Each transformed word must exist in the word list.

Return 0 if there is no such transformation sequence.

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.

Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

Constraints:

    1 <=beginWord.length <= 100
    endWord.length == beginWord.length
    1 <= wordList.length <= 5000
    wordList[i].length ==beginWord.length
    beginWord,endWord, andwordList[i] consist of lowercase English letters.
    beginWord !=endWord
    All the strings inwordList are unique.
