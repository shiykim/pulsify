# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Album.destroy_all
User.destroy_all
Song.destroy_all

def add_seed(model, id, link, filename)
  model_instance = model.find(id)
  file = EzDownload.open(link)
  model_instance.photo.attach(io: file, filename: filename)
  model_instance.save!
end


user = User.create(username:'demo', password: 'demouser', email: 'demo@email.com')
user1 = User.create(username:'claire', password: 'demouser', email: 'claire@email.com')
user2 = User.create(username:'muzicl0ver_21', password: 'demouser', email: 'mlover@email.com')
user3 = User.create(username:'dan', password: 'demouser', email: 'dan@email.com')

a = Artist.create(name: "Mitski")
b = Artist.create(name: "Artic Monkeys")
c = Artist.create(name: "Joji")
d = Artist.create(name: "Drake")
hans = Artist.create(name: "Hans Zimmer")
ken = Artist.create(name: "Kendrick Lamar")
gam = Artist.create(name: "Childish Gambino")

e = Album.create(title: 'Be the Cowboy', artist_id: a.id, release_year: 2018)
f = Album.create(title: 'AM', artist_id: b.id, release_year: 2013)
g = Album.create(title: 'In Tongues', artist_id: c.id, release_year: 2017)
slow = Album.create(title: 'Slow Dancing In The Dark', artist_id: c.id, release_year: 2018)
h = Album.create(title: 'Scorpion', artist_id: d.id, release_year: 2018)
pirates = Album.create(title: 'Pirates of the Caribbean', artist_id: hans.id, release_year: 2003)
damn = Album.create(title: 'DAMN', artist_id: ken.id, release_year: 2017)
camp = Album.create(title: 'Camp', artist_id: gam.id, release_year: 2011)
summer = Album.create(title: 'Summer Pack', artist_id: gam.id, release_year: 2018)

i = Song.create(artist_id: a.id, title:'Nobody', album_id: e.id, length: "3:13")
j = Song.create(artist_id: a.id, title:'Geyser', album_id: e.id, length: "2:24")
k = Song.create(artist_id: b.id, title:'Do I Wanna Know?', album_id: f.id, length: "4:32")
l = Song.create(artist_id: b.id, title:'R U Mine?', album_id: f.id, length: "3:20")
m = Song.create(artist_id: c.id, title:'Will He', album_id: g.id, length: "3:22")
m1 = Song.create(artist_id: c.id, title:'Slow Dancing In The Dark', album_id: slow.id, length: "3:29")
m2 = Song.create(artist_id: c.id, title:'Yeah Right', album_id: slow.id, length: "2:54")
jack = Song.create(artist_id: hans.id, title:'Fog Bound', album_id: pirates.id, length: "2:17")
jack1 = Song.create(artist_id: hans.id, title:'Jack Sparrow', album_id: pirates.id, length: "6:06")
damn1 = Song.create(artist_id: ken.id, title:'DNA.', album_id: damn.id, length: "3:05")
damn2 = Song.create(artist_id: ken.id, title:'LOYALTY.', album_id: damn.id, length: "3:47")
damn3 = Song.create(artist_id: ken.id, title:'LOVE.', album_id: damn.id, length: "3:33")
camp1 = Song.create(artist_id: gam.id, title:'LES', album_id: camp.id, length: "5:17")
camp2 = Song.create(artist_id: gam.id, title:'Bonfire', album_id: camp.id, length: "3:12")
summer1 = Song.create(artist_id: gam.id, title:'Feels Like Summer', album_id: summer.id, length: "4:57")
summer2 = Song.create(artist_id: gam.id, title:'Summertime Magic', album_id: summer.id, length: "3:33")
scorpion1 = Song.create(artist_id: d.id, title:'Nonstop', album_id: h.id, length: "3:58")
scorpion2 = Song.create(artist_id: d.id, title:"I'm Upset", album_id: h.id, length: "3:34")

n = Playlist.create(title: 'Mourning Songs', author_id: user2.id)
o1 = Playlist.create(title: 'Work Out Tunes', author_id: user.id)
o2 = Playlist.create(title: 'Coffee Table Tunes', author_id: user1.id)
o3 = Playlist.create(title: 'Sad Beats', author_id: user.id)
o4 = Playlist.create(title: "Dan's Beats", author_id: user3.id)

add_seed(Album,e.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/bethecowboy.jpg", 'bethecowboy.jpg');
add_seed(Album,f.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/artic.jpg", 'artic.jpg');
add_seed(Album,g.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/in-tongues.png", 'in-tongues.png');
add_seed(Album,slow.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/dancingdark.png", 'slow-dancing.png');
add_seed(Album,h.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/scorpion.jpg", 'scorpion.jpg');
add_seed(Album,pirates.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/pirates.jpg", 'pirates.jpg');
add_seed(Album,damn.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/damn.png", 'damn.png');
add_seed(Album,camp.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/camp.jpg", 'camp.jpg');
add_seed(Album,summer.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/summer-pack.jpg", 'summer-pack.jpg');

add_seed(Artist,a.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/mitski.jpg", 'mitski.jpg');
add_seed(Artist,b.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/articmonkeys.jpg", 'articmonkeys.jpg');
add_seed(Artist,c.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/joji2.jpg", 'joji.png');
add_seed(Artist,d.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/drake.jpg", 'drake.png');
add_seed(Artist,hans.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/handszimmer.jpg", 'hanszimmer.png');
add_seed(Artist,ken.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/kendrick-lamar.jpg", 'kendrick-lamar.jpg');
add_seed(Artist,gam.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/childish-gamb.jpg", 'childish-gamb.jpg');

add_seed(Song,i.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Nobody.mp3", 'nobody.mp3');
add_seed(Song,j.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Geyser.mp3", 'geyser.mp3');
add_seed(Song,k.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Arctic+Monkeys+-+Do+I+Wanna+Know.mp3", 'do-i-wanna-know.mp3');
add_seed(Song,l.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Arctic+Monkeys+-+R+U+Mine.mp3", 'r-u-mine.mp3');
add_seed(Song,m.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Will+He.mp3", 'will-he.mp3');
add_seed(Song,m1.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Slow+Dancing+In+The+Dark.mp3", 'slow-dancing.mp3');
add_seed(Song,m2.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Yeah+Right.mp3", 'yeah-right.mp3');
add_seed(Song,jack.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/01+-+Fog+Bound.mp3", 'fogbound.mp3');
add_seed(Song,jack1.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/01+-+Jack+Sparrow.mp3", 'jacksparrow.mp3');
add_seed(Song,damn1.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/DNA..mp3", 'dna.mp3');
add_seed(Song,damn2.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/LOYALTY..mp3", 'loyalty.mp3');
add_seed(Song,damn3.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/LOVE..mp3", 'love.mp3');
add_seed(Song,camp1.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/LES.mp3", 'les.mp3');
add_seed(Song,camp2.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Bonfire.mp3", 'bonfire.mp3');
add_seed(Song,summer1.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Childish+Gambino+-+Feels+Like+Summer.mp3", 'feels-like-summer.mp3');
add_seed(Song,summer2.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Childish+Gambino+-+Summertime+Magic.mp3", 'summertime-magic.mp3');
add_seed(Song,scorpion1.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Nonstop.mp3", 'nonstop.mp3');
add_seed(Song,scorpion2.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/Drake+-+Im+Upset.mp3", 'im-upset.mp3');
