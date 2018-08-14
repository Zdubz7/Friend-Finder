var friends = [{
    "name": "Denzel Washington",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/16490/16490_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DDenzel%2520Washington&h=1440&w=1080&tbnid=E0NUDpRFCInagM:&q=denzel+washington&tbnh=186&tbnw=139&usg=AFrqEzc07XsAJeh7u0B4g0i1KtDaEtZrog&vet=12ahUKEwjl09XTi-HcAhWudN8KHWwNB1kQ_B0wGnoECAcQCQ..i&docid=9LAWnW3etZA7YM&itg=1&sa=X&ved=2ahUKEwjl09XTi-HcAhWudN8KHWwNB1kQ_B0wGnoECAcQCQ",
    "scores": [5, 4, 2, 5, 1, 1, 2, 1, 3, 5]
}, {
    "name": "Angelina Jolie",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/4950/4950_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DAngelina%2520Jolie%2520Pitt&h=1440&w=1080&tbnid=8wDq_GM6z6S0YM:&q=angelina+jolie&tbnh=186&tbnw=139&usg=AFrqEzeMkuiY-cJEK7-7cYKZ1NNXs3z-5g&vet=12ahUKEwjo0Lbfi-HcAhWjT98KHRxQDPcQ_B0wGHoECAYQCQ..i&docid=DYrXFJFYOvFwNM&itg=1&sa=X&ved=2ahUKEwjo0Lbfi-HcAhWjT98KHRxQDPcQ_B0wGHoECAYQCQ",
    "scores": [3, 4, 2, 4, 4, 1, 1, 2, 3, 4]
}, {
    "name": "Johnny Depp",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/33623/33623_v9_bc.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DOprah%2520Noodlemantra&h=1440&w=1080&tbnid=9PPHMiosqm6ygM:&q=Johnny+Depp&tbnh=186&tbnw=139&usg=AFrqEzeKaxYnkIbixbra0w8LCgSwGigiWA&vet=12ahUKEwj8zrnpi-HcAhVPmuAKHe7IC1gQ_B0wIXoECAcQCQ..i&docid=S5ybfBR6DabIPM&itg=1&sa=X&ved=2ahUKEwj8zrnpi-HcAhVPmuAKHe7IC1gQ_B0wIXoECAcQCQ",
    "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
}, {
    "name": "Jennifer Aniston",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/30905/30905_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DJennifer%2520Aniston&h=1440&w=1080&tbnid=rljODI8lN_PZgM:&q=jennifer+aniston&tbnh=186&tbnw=139&usg=AFrqEzc8SkY7o1z68Ip58RsigtSXd-NzcA&vet=12ahUKEwiSup_0i-HcAhVCUrwKHVXfAhkQ_B0wGHoECAEQCQ..i&docid=eBHfgt8dyYiwBM&itg=1&hl=en&sa=X&sqi=2&ved=2ahUKEwiSup_0i-HcAhVCUrwKHVXfAhkQ_B0wGHoECAEQCQ",
    "scores": [5, 2, 4, 3, 3, 2, 1, 3, 3, 4]
}, {
    "name": "Brad Pitt",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/1366/1366_v9_bb.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DBrad%2520Pitt&h=1440&w=1080&tbnid=qA_2lYiH9xggBM:&q=Brad+Pitt&tbnh=186&tbnw=139&usg=AFrqEzeP1JZlZF8emixLkX29fsgiTBENEw&vet=12ahUKEwiFzsX8i-HcAhVKON8KHdIBBsoQ_B0wKXoECAYQCQ..i&docid=SZXTOCCWeVDCaM&itg=1&hl=en&sa=X&ved=2ahUKEwiFzsX8i-HcAhVKON8KHdIBBsoQ_B0wKXoECAYQCQ",
    "scores": [4, 1, 5, 3, 4, 5, 2, 3, 4, 5]
}, {
    "name": "Mila Kunis",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/173413/173413_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DMila%2520Kunis&h=1440&w=1080&tbnid=yTgu8590h97-YM:&q=mila+kunis&tbnh=186&tbnw=139&usg=AFrqEzf31A_k24d3AkuK7696fJI6_Gp0Kw&vet=12ahUKEwj4m-qbjOHcAhWEvbwKHc62DUAQ_B0wIXoECAgQCQ..i&docid=A0jby4sqQJ0SNM&itg=1&hl=en&sa=X&sqi=2&ved=2ahUKEwj4m-qbjOHcAhWEvbwKHc62DUAQ_B0wIXoECAgQCQ",
    "scores": [4, 1, 5, 3, 4, 5, 2, 3, 4, 5]
}, {
    "name": "Christian Bale",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/12441/12441_v9_bb.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DChristian%2520Bale&h=1440&w=1080&tbnid=L6jQd56qy7WrwM:&q=christian+bale&tbnh=186&tbnw=139&usg=AFrqEzfdtBCKUxxyvKECiqcB1VPa9KcIeA&vet=12ahUKEwjM3_ukjOHcAhXyUd8KHZDQBt0Q_B0wGnoECAcQCQ..i&docid=9cGTP_2mWSHDeM&itg=1&hl=en&sa=X&ved=2ahUKEwjM3_ukjOHcAhXyUd8KHZDQBt0Q_B0wGnoECAcQCQ",
    "scores": [3, 4, 2, 4, 4, 1, 1, 2, 3, 4]
}, {
    "name": "Julia Roberts",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/1474/1474_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DJulia%2520Roberts&h=1440&w=1080&tbnid=a1t63XFiMoZTYM:&q=julia+roberts&tbnh=186&tbnw=139&usg=AFrqEzdXvCxA7dm-XhskjVV7CwOCq_whVg&vet=12ahUKEwjt7uOujOHcAhWmnuAKHXB1DAUQ_B0wGXoECAcQCQ..i&docid=-u7CcFeog0vtfM&itg=1&hl=en&sa=X&ved=2ahUKEwjt7uOujOHcAhWmnuAKHXB1DAUQ_B0wGXoECAcQCQ",
    "scores": [5, 4, 2, 5, 1, 1, 2, 1, 3, 5]
}, {
    "name": "George Clooney",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/23213/23213_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DGeorge%2520Clooney&h=1440&w=1080&tbnid=xZZzjoYRRqJ3qM:&q=george+clooney&tbnh=186&tbnw=139&usg=AFrqEzdGjrmK9qmUJK-VdYE_vWmwnkaQyA&vet=12ahUKEwik1Z29jOHcAhUe7bwKHYg-DaUQ_B0wIXoECAYQCQ..i&docid=uTgEmwOenVkiZM&itg=1&hl=en&sa=X&sqi=2&ved=2ahUKEwik1Z29jOHcAhUe7bwKHYg-DaUQ_B0wIXoECAYQCQ",
    "scores": [1, 5, 1, 3, 5, 1, 4, 3, 2, 1]
}, {
    "name": "Jennifer Lopez",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/68580/68580_v9_bb.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DJennifer%2520Lopez&h=1440&w=1080&tbnid=eBAAz1_gz7nphM:&q=jennifer+lopez&tbnh=186&tbnw=139&usg=AFrqEzdDX5FYUC7BBtq86qppxDueHNdoDQ&vet=12ahUKEwj204HMjOHcAhWJULwKHetnC24Q_B0wJnoECAYQCQ..i&docid=c8E8TTHh4eGejM&itg=1&hl=en&sa=X&sqi=2&ved=2ahUKEwj204HMjOHcAhWJULwKHetnC24Q_B0wJnoECAYQCQ",
    "scores": [1, 3, 3, 1, 2, 4, 4, 1, 3, 1]
}, {
    "name": "Matt Damon",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/44333/44333_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DDickie%2520Greenleaf&h=1440&w=1080&tbnid=H2x4NP0CnxwERM:&q=matt+damon&tbnh=186&tbnw=139&usg=AFrqEzdoO97EpncFVLt5TggSOOn2DsNLZA&vet=12ahUKEwiWlcnUjOHcAhVrkuAKHWhrDm0Q_B0wGnoECAYQCQ..i&docid=mS2_3ggB4WbOlM&itg=1&hl=en&sa=X&ved=2ahUKEwiWlcnUjOHcAhVrkuAKHWhrDm0Q_B0wGnoECAYQCQ",
    "scores": [5, 2, 4, 3, 3, 2, 1, 3, 3, 4]
}, {
    "name": "Emma Watson",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/247026/247026_v9_bb.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DEmma%2520Watson&h=1440&w=1080&tbnid=HRimsYaH_OXAyM:&q=emma+watson&tbnh=186&tbnw=139&usg=AFrqEzf-5yJEEuxAyPT59vxhItQ6JCTDZg&vet=12ahUKEwjkl-nfjOHcAhUKy7wKHRhhAZcQ_B0wInoECAYQCQ..i&docid=PqoRfIC6mlk0NM&itg=1&hl=en&sa=X&sqi=2&ved=2ahUKEwjkl-nfjOHcAhUKy7wKHRhhAZcQ_B0wInoECAYQCQ",
    "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}, {
    "name": "Harrison Ford",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/25704/25704_v9_ba.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DHarrison%2520J.%2520Ford&h=1440&w=1080&tbnid=K5qoSoPTK8wqzM:&q=harrison+ford&tbnh=186&tbnw=139&usg=AFrqEzdN7TSq_vDLk9HLMI4LXPfThhhvqQ&vet=12ahUKEwjRlJ7qjOHcAhXHx7wKHViSDBYQ_B0wEXoECAYQCQ..i&docid=N4QS0m5gNOF-1M&itg=1&hl=en&sa=X&sqi=2&ved=2ahUKEwjRlJ7qjOHcAhXHx7wKHViSDBYQ_B0wEXoECAYQCQ",
    "scores": [2, 3, 5, 5, 3, 5, 2, 1, 3, 2]
}, {
    "name": "Liam Neeson",
    "photo": "https://www.google.com/imgres?imgurl=http://www.gstatic.com/tv/thumb/persons/1236/1236_v9_bb.jpg&imgrefurl=http://google.com/search?tbm%3Disch%26q%3DLiam%2520Neeson&h=1440&w=1080&tbnid=Fc1WP-yraRvHQM:&q=liam+neeson&tbnh=186&tbnw=139&usg=AFrqEzea0_OAJMvitmqHMZXcG42JdTMmWg&vet=12ahUKEwjE-Y2PjeHcAhXomuAKHQNPA_AQ_B0wG3oECAcQCQ..i&docid=H3F27Ahl0yKz2M&itg=1&hl=en&sa=X&ved=2ahUKEwjE-Y2PjeHcAhXomuAKHQNPA_AQ_B0wG3oECAcQCQ",
    "scores": [2, 3, 5, 5, 3, 5, 2, 1, 3, 2]
}];

module.exports = friends;