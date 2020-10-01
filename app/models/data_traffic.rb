class DataTraffic < ActiveHash::Base
  self.data = [
    { id: 1, name: '想定データ通信量' },
    { id: 2, name: '〜1GB' },
    { id: 3, name: '〜2GB' },
    { id: 4, name: '〜3GB' },
    { id: 5, name: '〜4GB' },
    { id: 6, name: '〜5GB' },
    { id: 7, name: '〜7GB' },
    { id: 8, name: '〜30GB' },
    { id: 9, name: '〜50GB' },
    { id: 10, name: '〜100GB' },
    { id: 11, name: '100GB以上' }
  ]
end
