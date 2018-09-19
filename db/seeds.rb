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

a = Artist.create(name: "Mitski")
b = Artist.create(name: "Artic Monkeys")
c = Artist.create(name: "Joji")
d = Artist.create(name: "Drake")
hans = Artist.create(name: "Hans Zimmer")

e = Album.create(title: 'Be the Cowboy', artist_id: a.id, release_year: 2018)
f = Album.create(title: 'AM', artist_id: b.id, release_year: 2013)
g = Album.create(title: 'In Tongues', artist_id: c.id, release_year: 2017)
h = Album.create(title: 'Scorpion', artist_id: d.id, release_year: 2018)
pirates = Album.create(title: 'Pirates of the Caribbean', artist_id: hans.id, release_year: 2003)

# i = Song.create(artist_id: a.id, title:'Nobody', album_id: e.id, length: "3:13")
# j = Song.create(artist_id: a.id, title:'Geyser', album_id: e.id, length: "2:24")
# k = Song.create(artist_id: b.id, title:'Do I Wanna Know?', album_id: f.id, length: "4:32")
# l = Song.create(artist_id: b.id, title:'R U Mine?', album_id: f.id, length: "3:20")
# m = Song.create(artist_id: c.id, title:'Will He', album_id: g.id, length: "3:22")
jack = Song.create(artist_id: hans.id, title:'Fog Bound', album_id: pirates.id, length: "2:17")
jack1 = Song.create(artist_id: hans.id, title:'Jack Sparrow', album_id: pirates.id, length: "6:06")

n = Playlist.create(title: 'Morning Songs', author_id: user.id)
o = Playlist.create(title: 'Work Out Tunes', author_id: user.id)
#
# q = PlaylistSong.create(playlist_id: n.id, song_id: m.id)
# r = PlaylistSong.create(playlist_id: n.id, song_id: i.id)

add_seed(Album,e.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/bethecowboy.jpg", 'bethecowboy.jpg');
add_seed(Album,f.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/artic.jpg", 'artic.jpg');
add_seed(Album,g.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/in-tongues.png", 'in-tongues.png');
add_seed(Album,h.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/scorpion.jpg", 'scorpion.jpg');
add_seed(Album,pirates.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/album-covers/pirates.jpg", 'pirates.jpg');

add_seed(Artist,a.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/mitski.jpg", 'mitski.jpg');
add_seed(Artist,b.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/articmonkeys.jpg", 'articmonkeys.jpg');
add_seed(Artist,c.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/joji2.jpg", 'joji.png');
add_seed(Artist,d.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/drake.jpg", 'drake.png');
add_seed(Artist,hans.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/artist_images/handszimmer.jpg", 'hanszimmer.png');

add_seed(Song,jack.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/01+-+Fog+Bound.mp3", 'fogbound.mp3');
add_seed(Song,jack1.id,"https://s3.us-east-2.amazonaws.com/pulsify-dev-aa/songs/01+-+Jack+Sparrow.mp3", 'jacksparrow.mp3');
