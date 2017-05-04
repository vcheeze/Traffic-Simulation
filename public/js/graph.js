/**
 * Created by vcheeze on 5/4/17.
 */

var total = 1000;
var x = 500, y = total - x;

var vertexes = [
    new Vertex('0', 'a'),
    new Vertex('1', 'b'),
    new Vertex('2', 'c'),
    new Vertex('3', 'd')
];

var edges = [
    new Edge('0', vertexes[0], vertexes[2], x/100),
    new Edge('1', vertexes[0], vertexes[3], 12),
    new Edge('2', vertexes[2], vertexes[1], 12),
    new Edge('3', vertexes[3], vertexes[1], y/100)
];

var graph1 = new Graph(vertexes, edges);