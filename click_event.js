function download(document) {

	const number = document.location.href.split("/").pop().trim();

	const title = document.getElementById("problem_title").textContent.trim();
	const desctiption = document.getElementById("problem_description").textContent.trim();
	const input = document.getElementById("problem_input").textContent.trim();
	const output = document.getElementById("problem_output").textContent.trim();

	const code = `
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <math.h>

using namespace std;

/*
    *문제 번호 : ${number}

    *문제명 : ${title}

    *문제 설명 : \n${intent(desctiption)}

    *입력 : \n${intent(input)}

    *출력 : \n${intent(output)}

*/
int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

}`

	downloadStringAsFile(code.trim(), number + ".cpp");
}

function intent(str) {
	str = str.trim().split("\n").map((line) => line = "          " + line).join("\n");
	return str;
}

function downloadStringAsFile(content, fileName, mimeType = "text/plain") {
	// Blob 객체 생성
	const blob = new Blob([content], { type: mimeType });

	// 가상 URL 생성
	const url = URL.createObjectURL(blob);

	// 다운로드를 위한 <a> 요소 생성
	const a = document.createElement("a");
	a.href = url;
	a.download = fileName;

	// 다운로드 트리거
	document.body.appendChild(a); // 일부 브라우저에서는 필요
	a.click();
	document.body.removeChild(a);

	// 메모리에서 URL 해제
	URL.revokeObjectURL(url);
}

function show_link() {
	const link = document.location.href;
	if (!link.startsWith("https://www.acmicpc.net/problem/")) {
		return;
	};

	download(document);
}

show_link();

