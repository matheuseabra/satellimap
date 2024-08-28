CREATE TABLE images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE objects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  image_id UUID REFERENCES images(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('rectangle', 'polygon')),
  coordinates JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);