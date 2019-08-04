import os
import argparse

def run(data_dir):
  if not os.path.exists(data_dir):
    print('folder does not exist: ', data_dir)
    return

  output_file = 'output.jsonl'
  print(output_file)
  output_path = os.path.join(data_dir, output_file)
  print(output_path)

  files = os.listdir(data_dir)
  with open(output_path, 'w') as fw:
    for i,f in enumerate(files): # there was a ,start=1 here that I removed, can't remember why it would be there. shouldn't be, i think.
      if '.txt' not in f:
        continue

      with open(os.path.join(data_dir, f), 'r') as fr:
        txt = fr.read()
        fw.write(txt)
        fw.write('\n')


if __name__ == "__main__":

  # parse input arguments
  parser = argparse.ArgumentParser()
  parser.add_argument('--data_dir', type=str, default='dev/high', help='output dir')
  args = parser.parse_args()
  run(args.data_dir)
