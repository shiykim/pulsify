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

User.create(username:'demo', password: 'demouser', email: 'demo@email.com')

a = Artist.create(name: "Mitski")
b = Artist.create(name: "Artic Monkeys")
c = Artist.create(name: "Joji")
d = Artist.create(name: "Drake")

e = Album.create(title: 'Be the Cowboy', artist_id: a.id, release_year: 2018)
f = Album.create(title: 'AM', artist_id: b.id, release_year: 2013)
g = Album.create(title: 'In Tongues', artist_id: c.id, release_year: 2017)
h = Album.create(title: 'Scorpion', artist_id: d.id, release_year: 2018)

i = Song.create(artist_id: a.id, title:'Nobody', album_id: e.id, length: "3:13")
j = Song.create(artist_id: a.id, title:'Geyser', album_id: e.id, length: "2:24")
k = Song.create(artist_id: b.id, title:'Do I Wanna Know?', album_id: f.id, length: "4:32")
l = Song.create(artist_id: b.id, title:'R U Mine?', album_id: f.id, length: "3:20")
m = Song.create(artist_id: c.id, title:'Will He', album_id: g.id, length: "3:22")

# add_seed(Album,e.id,"https://s3.amazonaws.com/pulsify-dev/album+covers/be-the-cowboy.jpg", 'be-the-cowboy.jpg');
# add_seed(Album,f.id,"https://s3.amazonaws.com/pulsify-dev/album+covers/artic.jpg", 'artic.jpg');
# add_seed(Album,g.id,"https://s3.amazonaws.com/pulsify-dev/album+covers/in-tongues.jpg", 'in-tongues.jpg');
# add_seed(Album,h.id,"https://s3.amazonaws.com/pulsify-dev/album+covers/scorpion.jpg", 'scorpion.jpg');
