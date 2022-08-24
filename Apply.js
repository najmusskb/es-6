document.getElementById('apply-bg').addEventListener('click', function () {

    const Friends = document.getElementsByClassName('friend');

    // console.log(FriendsElement)

    for (const friends of Friends) {

        console.log(friends)

        friends.style.backgroundColor = 'red';

    }


})


document.getElementById('center-third').addEventListener('click', function () {
    const centerthird = document.getElementById('center-third-friend');
    centerthird.style.backgroundColor = 'gray';

})



document.getElementById('new-friend').addEventListener('click', function () {

    const FriendContainer = document.getElementById('Friends');
    const friend = document.createElement('div');
    friend.innerHTML = `
    
 <h3 class="new-friend-name">New Friend </h3>
 <p >SomeThings added</p>
    
    `
    FriendContainer.appendChild(friend);

})