<div align="center">
  <br />
  <h1> 알고리즘 문제 모음</h1>
  <br />
</div>

# 📚문제집(백준)

<br />

[1.그리디](#그리디-알고리즘)

<br />
<br />

## 그리디 알고리즘

<br />

```plaintext
현재 상황에서 당장 가장 좋아 보이는 상황만을 선택하는 알고리즘
최적의 해를 구하기 위한 근사적인 방법으로 사용될 때가 많다.
```

|                         Quiz                          |              Code              | State |   Date   |
| :---------------------------------------------------: | :----------------------------: | :---: | :------: |
|    [동전0](https://www.acmicpc.net/problem/11047)     |    [✏️](./greedy/동전0.js)     |  ☑️   |          |
|     [ATM](https://www.acmicpc.net/problem/11399)      |     [✏️](./greedy/atm.js)      |  ☑️   |          |
| [잃어버린 괄호](https://www.acmicpc.net/problem/1541) | [✏️](./greedy/잃어버린괄호.js) |  ☑️   |          |
|   [설탕 배달](https://www.acmicpc.net/problem/2839)   |   [✏️](./greedy/설탕배달.js)   |  ☑️   |          |
|     [A->B](https://www.acmicpc.net/problem/16953)     |    [✏️](./greedy/A에서B.js)    |  ☑️   |          |
|   [수들의합](https://www.acmicpc.net/problem/1789)    |   [✏️](./greedy/수들의합.js)   |  ☑️   |          |
|   [신입 사원](https://www.acmicpc.net/problem/1946)   |   [✏️](./greedy/신입사원.js)   |  ☑️   |          |
|    [주유소](https://www.acmicpc.net/problem/13305)    |    [✏️](./greedy/주유소.js)    |  ☑️   |          |
|  [회의실 배정](https://www.acmicpc.net/problem/1931)  |  [✏️](./greedy/회의실배정.js)  |  ☑️   |          |
| [풍선 맞추기](https://www.acmicpc.net/problem/11509)  |  [✏️](./greedy/풍선맞추기.js)  |  ⏪   | 24.01.07 |
|   [피보나치](https://www.acmicpc.net/problem/9009)    |   [✏️](./greedy/피보나치.js)   |  ☑️   |          |
| [박 터트리기](https://www.acmicpc.net/problem/19939)  |  [✏️](./greedy/박터트리기.js)  |  ⏪   | 24.01.08 |
|     [회문](https://www.acmicpc.net/problem/17609)     |     [✏️](./greedy/회문.js)     |  ☑️   |          |
|  [박스 채우기](https://www.acmicpc.net/problem/1493)  |  [✏️](./greedy/박스채우기.js)  |  ⭐   |          |

<br />
<br />

## 이진 탐색 알고리즘

<br />

```plaintext
조건: 단조증가함수-> x <= y , f(x) <= f(y)
매우 넓은(억 단위) 탐색 범위에서 최적의 해를 찾는 경우
데이터 정렬한 뒤 다수의 쿼리를 날려야 하는 경우
정렬된 배열에서 특정 원소의 개수 구하기
파라메트릭 서치(최적화 문제를 결정 문제로 바꾸어 해결하는 기법)
```

<br />

|                          Quiz                          |                 Code                 | State |   Date   |
| :----------------------------------------------------: | :----------------------------------: | :---: | :------: |
|      [예산](https://www.acmicpc.net/problem/2512)      |     [✏️](./binarySearch/예산.js)     |  ☑️   | 24.01.10 |
|  [나무 자르기](https://www.acmicpc.net/problem/2805)   |  [✏️](./binarySearch/나무자르기.js)  |  ☑️   | 24.01.11 |
|  [랜선 자르기](https://www.acmicpc.net/problem/1654)   |  [✏️](./binarySearch/랜선자르기.js)  |  ☑️   | 24.01.11 |
|  [숫자 카드2](https://www.acmicpc.net/problem/10816)   |  [✏️](./binarySearch/숫자카드2.js)   |  ⏪   | 24.01.13 |
| [병사 배치하기](https://www.acmicpc.net/problem/18353) | [✏️](./binarySearch/병사배치하기.js) |  ⏪   | 24.01.13 |
|    [K번째 수](https://www.acmicpc.net/problem/1300)    |   [✏️](./binarySearch/k번째수.js)    |  ⭐   | 24.01.14 |

<br />
<br />

## 백트래킹 알고리즘

<br />

```plaintext
일반적으로 그래프/트리의 모든 원소를 완전 탐색하기 위한 목적으로 사용할 수 있다.
- DFS는 일반적으로 완전 탐색 목적으로, 재귀 함수를 이용해 구현한다.
- 백트래킹도 재귀 함수를 이용해 구현하는 것이 일반적이지만, 단순히 완전 탐색하는 것이 아니라
조건에 따라서 유망한 노드로 이동한다.
```

<br />

|                               Quiz                                |                 Code                 | State |   Date   |
| :---------------------------------------------------------------: | :----------------------------------: | :---: | :------: |
|          [N-Queen](https://www.acmicpc.net/problem/9663)          |     [✏️](./백트래킹/n-queen.js)      |  ☑️   | 24.01.18 |
|          [N과 M](https://www.acmicpc.net/problem/15649)           |       [✏️](./백트래킹/n과m.js)       |  ☑️   | 24.01.19 |
|        [모든 순열](https://www.acmicpc.net/problem/10974)         |     [✏️](./백트래킹/모든순열.js)     |  ☑️   | 24.01.21 |
|         [0 만들기](https://www.acmicpc.net/problem/7490)          |     [✏️](./백트래킹/0만들기.js)      |  ☑️   | 24.01.23 |
|         [N과 M(2)](https://www.acmicpc.net/problem/15650)         |      [✏️](./백트래킹/n과m2.js)       |  ☑️   | 24.01.24 |
|         [N과 M(3)](https://www.acmicpc.net/problem/15651)         |      [✏️](./백트래킹/n과m3.js)       |  ☑️   | 24.01.24 |
|         [N과 M(4)](https://www.acmicpc.net/problem/15652)         |      [✏️](./백트래킹/n과m4.js)       |  ☑️   | 24.01.24 |
|      [외판원 순회 2](https://www.acmicpc.net/problem/10971)       |   [✏️](./백트래킹/외판원순회2.js)    |  ⭐   | 24.01.25 |
| [도영이가 만든 맛있는 음식](https://www.acmicpc.net/problem/2961) | [✏️](./백트래킹/도영이가만든음식.js) |  ☑️   | 24.01.26 |
|           [로또](https://www.acmicpc.net/problem/6603)            |       [✏️](./백트래킹/로또.js)       |  ☑️   | 24.01.28 |
|          [알파벳](https://www.acmicpc.net/problem/1987)           |      [✏️](./백트래킹/알파벳.js)      |  ☑️   | 24.01.28 |
|          [부등호](https://www.acmicpc.net/problem/2529)           |      [✏️](./백트래킹/부등호.js)      |  ☑️   | 24.01.28 |

<br />
<br />

## DFS 알고리즘

<br />

```plaintext
DFS를 실제로 구현할 때는 스택 혹은 재귀 함수를 이용한다.
- 재귀 함수는 내부적으로 스택과 동일한 동작 원리를 가지므로, 구현의 편리성이 존재한다.
- 완전 탐색을 목적으로 하는 경우, 탐색 속도가 BFS보다 느린 경향이 있다.

흔히 DFS는 모든 노드를 [완전 탐색]하기 위한 방법으로 사용된다.
- 완전 탐색 알고리즘에서는 기본적으로 각 노드 및 간선에 대하여 한번씩 확인하도록 한다.
- DFS를 응용하여 모든 경우의 수를 계산하기 위한 백트래킹(back-tracking) 알고리즘으로
사용할 수 있다. (기본 알고리즘)
- 백트래킹에 비하여 기본적인 형태의 DFS는 그 코드 예시가 간단하다.

1. 더 짧은 코드로 간결히 구현해야 하는 경우
2. 큐 라이브러리를 사용할 수 없는 경우
3. 트리의 순회, 점화식 구현 등 DFS(재귀 구조)에 특화된 문제인 경우
4. 트리에서 최단 거리 탐색을 구하는 경우
    → 트리에서는 두 노드를 잇는 경로가 하나만 존재한다
```

<br />

|                           Quiz                           |             Code              | State |   Date   |
| :------------------------------------------------------: | :---------------------------: | :---: | :------: |
|     [바이러스](https://www.acmicpc.net/problem/2606)     |    [✏️](./dfs/바이러스.js)    |  ☑️   | 24.01.29 |
|   [유기농 배추](https://www.acmicpc.net/problem/1012)    |   [✏️](./dfs/유기농배추.js)   |  ☑️   | 24.01.29 |
| [노드사이의 거리](https://www.acmicpc.net/problem/1240)  | [✏️](./dfs/노드사이의거리.js) |  ☑️   | 24.01.30 |
|       [트리](https://www.acmicpc.net/problem/4803)       |      [✏️](./dfs/트리.js)      |  ⏲️   | 24.01.30 |
|    [치킨 배달](https://www.acmicpc.net/problem/15686)    |    [✏️](./dfs/치킨배달.js)    |  ⏲️   | 24.01.31 |
|  [단지번호붙이기](https://www.acmicpc.net/problem/2667)  | [✏️](./dfs/단지번호붙이기.js) |  ⏲️   | 24.01.31 |
|   [텀 프로젝트](https://www.acmicpc.net/problem/9466)    |   [✏️](./dfs/텀프로젝트.js)   |  ⏲️   | 24.02.01 |
|    [숫자고르기](https://www.acmicpc.net/problem/2668)    |   [✏️](./dfs/숫자고르기.js)   |  ☑️   | 24.02.02 |
|    [적록색약](https://www.acmicpc.net/problem/10026)     |    [✏️](./dfs/적록색약.js)    |  ⏲️   | 24.02.03 |
|     [연구소](https://www.acmicpc.net/problem/14502)      |     [✏️](./dfs/연구소.js)     |  ⭐   | 24.02.03 |
|  [차이를 최대로](https://www.acmicpc.net/problem/10819)  |  [✏️](./dfs/차이를최대로.js)  |  ☑️   | 24.02.04 |
| [연산자 끼워넣기](https://www.acmicpc.net/problem/14888) | [✏️](./dfs/연산자끼워넣기.js) |  ☑️   | 24.02.04 |

<br />
<br />

## BFS 알고리즘

<br />

```plaintext
그래프 혹은 트리에서 모든 노드를 한 번씩 탐색하기 위한 기본적인 방법이다.
- [완전 탐색]을 수행하기 위해 사용할 수 있는 방법 중 하나다.
- (모든 간선의 길이가 동일할 때) 최단 거리를 탐색하기 위한 목적으로 사용할 수 있다.
- 큐(queue) 자료구조를 사용한다.
  → 기본적으로 DFS는 스택, BFS는 큐를 사용한다.
```

```plaintext
너비 우선 탐색이 사용되는 예시로는 다음과 같은 상황들이 있다.
1. 간선의 비용이 동일한 상황에서 [최단 거리] 문제를 해결하는 경우
2. 완전 탐색을 위해 사용한 DFS 솔루션이 메모리/시간 초과를 받아 BFS로 재시도하는 경우
  → DFS와 BFS 모두 그래프 탐색 목적으로 사용할 수 있으나, 구현이 익숙하다면 BFS를 추천한다.
    -코딩 테스트에서 DFS로 해결할 수 있는 문제는 BFS로도 해결할 수 있는 경우가 많다.
    -DFS는 일반적인 최단 거리 문제를 해결할 수 없다.

3. BFS는 다익스트라 최단 경로 알고리즘과 유사한 특징이 있다.
    → 다익스트라는 간선의 비용이 서로 다를 수 있을 때 사용 가능하다.
      - 다익스트라 알고리즘은 일반 큐 대신에 우선순위 큐를 사용한다.
      - 다익스트라는 특정 노드에 대하여 [최단 거리] 값이 갱신될 수 있다. (더 짧은 경로를 찾는 경우)
```

<br />

|                         Quiz                          |            Code             | State |   Date   |
| :---------------------------------------------------: | :-------------------------: | :---: | :------: |
|   [숨바꼭질](https://www.acmicpc.net/problem/1697)    |   [✏️](./bfs/숨바꼭질.js)   |  ☑️   | 24.02.04 |
| [나이트의 이동](https://www.acmicpc.net/problem/7562) | [✏️](./bfs/나이트의이동.js) |  ☑️   | 24.02.04 |
