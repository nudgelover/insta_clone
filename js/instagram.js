// 넛지 이미지 슬라이드

let num = 1;
function changeGallery(pic) {
  if (pic) {
    if (num == 4) return; //num이 4일 때 num++이전에 강제종료
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  let imgTag = document.getElementById('mainimg');
  imgTag.setAttribute('src', 'image/nudge' + num + '.jpg');
}

// 넛지 모달 슬라이드
let num2 = 1;
function changeGallery2(pic) {
  if (pic) {
    if (num2 == 4) return;
    num2++;
  } else {
    if (num2 == 1) return;
    num2--;
  }
  let imgTag = document.getElementById('moderimg');
  imgTag.setAttribute('src', 'image/nudge' + num2 + 'M.jpg');
}

//박명수 이미지 슬라이드
let num3 = 1;
function changeGallery3(pic) {
  if (pic) {
    if (num3 == 4) return;
    num3++;
  } else {
    if (num3 == 1) return;
    num3--;
  }
  let imgTag = document.getElementById('mainimg2');
  imgTag.setAttribute('src', 'image/pms' + num3 + '.png');
}

// 박명수 모달 슬라이드
let num4 = 1;
function changeGallery4(pic) {
  if (pic) {
    if (num4 == 4) return;
    num4++;
  } else {
    if (num4 == 1) return;
    num4--;
  }
  let imgTag = document.getElementById('moderimg2');
  imgTag.setAttribute('src', 'image/pms' + num4 + 'M.png');
}

//---------------넛지모달창팝업--------------------

let modal = document.querySelector('.modal');
let mainimg = document.querySelector('#mainimg');
let closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

if (mainimg) mainimg.addEventListener('click', toggleModal);
if (closeButton) closeButton.addEventListener('click', toggleModal);

//---------------명수모달창팝업--------------------
let modal2 = document.querySelector('.modal2');
let mainimg2 = document.querySelector('#mainimg2');
let closeButton2 = document.querySelector('.close-button2');

function toggleModal2() {
  modal2.classList.toggle('show-modal');
}

if (mainimg2) mainimg2.addEventListener('click', toggleModal2);
if (closeButton2) closeButton2.addEventListener('click', toggleModal2);

//------------피드글 더보기 피기-------------

document.getElementById('more').style.display = 'none';

function doDisplay() {
  var commentmore = document.getElementById('more');
  if (commentmore.style.display == 'none') {
    commentmore.style.display = 'block';
  }
}
// 만약 접었따 폈다하고 싶으면
// else {
//   commentmore.style.display = "none";
// } 추가 !!

document.getElementById('more_2').style.display = 'none';

function doDisplay2() {
  var commentmore = document.getElementById('more_2');
  if (commentmore.style.display == 'none') {
    commentmore.style.display = 'block';
  }
}

//------------더보기 눌렀을 때 글자 사라지게------------------
let toggleBtn = document.querySelector('#morebtn');
toggleBtn.onclick = btndisplay;

function btndisplay() {
  if (btndisplay !== 'none') {
    morebtn.style.display = 'none';
  }
}

let toggleBtn2 = document.querySelector('#morebtn2');
toggleBtn2.onclick = btndisplay2;

function btndisplay2() {
  if (btndisplay2 !== 'none') {
    morebtn2.style.display = 'none';
  }
}

// -------코멘트 사진 변경(하트랑 북마크)-------------------

function changePic(id) {
  let heart = document.querySelector('#' + id);
  const heartState = heart.getAttribute('data-state');

  switch (heartState) {
    case 'unClick':
      heart.src = 'image/redheart.png';
      heart.setAttribute('data-state', 'click');
      break;

    case 'click':
      heart.src = 'image/heart2.png';
      heart.setAttribute('data-state', 'unClick');
      break;
  }
}

function changePic2(id) {
  let bookmark = document.querySelector('#' + id);
  const bookmarkState = bookmark.getAttribute('data-state');

  switch (bookmarkState) {
    case 'unClick':
      bookmark.src = 'image/bookmark2.png';
      bookmark.setAttribute('data-state', 'click');
      break;

    case 'click':
      bookmark.src = 'image/bookmark.png';
      bookmark.setAttribute('data-state', 'unClick');
      break;
  }
}

//---------------댓글입력창-----------------------------------
let commentInput = document.getElementsByClassName('main_comment_text')[0];
let submitBtn = document.getElementsByClassName('main_comment_submit')[0];
function submit() {
  const box = document.getElementsByClassName(
    'main-icon-like-text-write_comment'
  )[0];
  const comments = document.createElement('div');
  const userName = document.createElement('span');
  const mainText = document.createElement('p');

  comments.classList.add('main-icon-like-text-write_commentbox');
  userName.classList.add('userName');
  mainText.classList.add('main-icon-like-text-write-subtext');

  userName.innerHTML = 'jinhee';
  mainText.innerText = commentInput.value;

  comments.appendChild(userName);
  comments.appendChild(mainText);

  box.appendChild(comments);
}

submitBtn.addEventListener('click', (event) => {
  submit();
  commentInput.value = '';
});

commentInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    submit();
    commentInput.value = '';
  }
});

//맨밑 게시글 더보기 + 글자사라지게

document.getElementById('nomoreimg').style.display = 'none';
function GalleryUpload() {
  var gallery = document.getElementById('nomoreimg');
  if (gallery.style.display == 'none') {
    gallery.style.display = 'block';
  } else {
    gallery.style.display = 'none';
  }
}

let galleryBtn = document.querySelector('#GalleryMore');
galleryBtn.onclick = gallerydisplay;

function gallerydisplay() {
  if (gallerydisplay !== 'none') {
    GalleryMore.style.display = 'none';
  }
}

//----------------스크롤 ------------
function sTo() {
  window.scrollTo({top: 0, behavior: 'smooth'}); //x좌표 y좌표(left 100 top 200)
}

//--------------페이지이동-------------------------------
function goToMain() {
  location.href = 'index.html';
}

function goToLogin() {
  location.href = 'login.html';
}

function goToProfile() {
  location.href = 'spring10_14.html';
}

function goToNotice() {
  location.href = 'notice.html';
}
function goToJoin() {
  location.href = 'join.html';
}
