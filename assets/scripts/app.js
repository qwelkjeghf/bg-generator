// Sequence for pushing changes is:

//				1. Clone repo from ghub: git clone URL
// 				2. Merge local assets into clone folder, manually.
//				3. Change terminal directory to clone folder: cd DIR
//				4. View untracked files/folders: git status
//				5. Add each untracked file/folder: git add filename.fileextension OR to add everything git add .
//				6. Run git status again to confirm no further untracked files
//				7. Commit changes in preparation for push, add message describing changes: git commit -m MSG
//				8. Push files to ghub: git push

//

// Sequence for pulling changes is:

//									1. Ensure editor is in the proper directory(repo retrieved from ghub)
//									2. Once the above steps have been completed and before step 7 run: git pull

//

// Sequence for branching is:

//							1. To view all branches: git branch
//							2. To create new branch: git branch BRANCHNAME
//							3. To switch to target branch: git checkout TARGETBRANCH
//							4. Merging branches done on ghub
