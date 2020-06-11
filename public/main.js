
getCSS.onclick = () => {
  //step1 创建request对象
  const request = new XMLHttpRequest()
  //step2 初始化http请求参数  参数一：请求方法 参数二：请求url
  request.open('GET', "/style.css") //readyState = 1
  //step3 配置 请求成功事件 和 请求失败事件
  request.onreadystatechange = () => {
    console.log(request.readyState)
    if (request.readyState === 4) { //下载完成（但是不知道是成功2xx 还是失败404）
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style') //创建 style 标签
        style.innerHTML = request.response            //填写 style 内容
        document.head.appendChild(style)              //插入 head  里面
      }
      else {
        alert("加载 CSS 失败")
      }
    }
  }
  //step4 发送请求
  request.send();
}

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/2.js')
  request.onload = () => {
    const script = document.createElement('script')
    script.innerHTML = request.response;
    document.body.appendChild(script);
  }
  request.onerror = () => {
  }
  request.send();
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/3.html')
  request.onload = () => {
    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.appendChild(div)
  }
  request.onerror = () => {
  }
  request.send();
}

getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const obj = JSON.parse(request.response)
      myName.innerHTML = obj.name;
    }
  }
  request.send()
}
let n = 2;
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach(item => {
        const li = document.createElement("li")
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n = n + 1;
    }

  }
  request.send()
}

